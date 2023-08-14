import { ActionType, FamilyMember } from "../common/types";
import { FAMILY_CONSTS } from "./constants";

interface FamilyStore {
    members: FamilyMember[]
}

const initState: FamilyStore = {
    members: []
};

const familyReducer = (state = initState, action: ActionType<FamilyMember | FamilyMember[]>): FamilyStore => {
    switch (action.type) {
        case FAMILY_CONSTS.ADD_MEMBER:
            const newMember = action.payload as FamilyMember;
            return { ...state, members: [...state.members, newMember] };
        case FAMILY_CONSTS.REMOVE_MEMBER:
            const removeMember = action.payload as FamilyMember;
            return { ...state, members: state.members.filter(x => x.id !== removeMember.id) };
        case FAMILY_CONSTS.LOAD_MEMBERS:
            const members = action.payload as FamilyMember[];
            return { ...state, members: members};
        default:
            return state;
    }
}

export default familyReducer;