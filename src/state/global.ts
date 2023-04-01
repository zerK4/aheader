import { GlobalState } from '@/types/StateManagementTypes/GlobalState';
import { signOut } from 'next-auth/react';
import { signIn } from 'next-auth/react';
import { getProviders } from 'next-auth/react';
import { create } from 'zustand'

const global = create<GlobalState>((set) => ({
    loading: false,
    login: (provider: any) => {
        global.setState({ loading: true });
        signIn(provider.id);
      },
    logout: () => {
        global.setState({ loading: true });
        signOut();
    },
    loginPopup: {
        active: false,
        setActive: (status) => {
            set((state) => ({
                loginPopup: {
                ...state.loginPopup,
                    active: status
                }
            }))
        }
    },
    providers: {},
    getProviders: async () => {
        global.setState({ loading: true})
        const data = await getProviders()
        global.setState({ providers: data})
        global.setState({ loading: false})
    },
    userPopup: {
        active: false,
    },
    completeOverflowOff: false,
    setActiveOverflowOff: (active) => set(()=> ({
        completeOverflowOff: active
    })),
    sidebarActive: true,
    setSidebarState: (active) => {
        set(() => ({
            sidebarActive: active
        }))
    }
}))

export default global;