import { GlobalState } from '@/types/StateManagementTypes/GlobalState';
import { create } from 'zustand'

const global = create<GlobalState>((set) => ({
    loading: false,
}))

export default global;