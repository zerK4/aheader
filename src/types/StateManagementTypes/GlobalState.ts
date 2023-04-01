export interface GlobalState {
    loading: boolean;
    login: (providers: any) => void;
    logout: () => void;
    loginPopup: {
        active: boolean;
        setActive: (status: boolean) => void;
    },
    providers: Object;
    getProviders: () => Promise<void>;
    userPopup: {
        active: boolean
    };
    completeOverflowOff: boolean;
    setActiveOverflowOff: (active: boolean) => void;
    sidebarActive: boolean;
    setSidebarState: (active: boolean) => void;
    windowSize: number;
    searchBarStatus: boolean;
    setSearchBarStatus: (active: boolean) => void;
    addSomething: boolean;
    setAddSomething: (active: boolean) => void;
}