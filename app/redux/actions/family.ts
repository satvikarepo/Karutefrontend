import { Dispatch } from "redux";
import { FamilyMember} from "../../common/types";
import {FAMILY_CONSTS} from "../constants";
import http from "../../common/helpers/http";
import { showError } from "./commonActions";


export function SaveFamilyMember(member:FamilyMember, cb:()=>void){
    return async (dispatch:Dispatch)=>{
        await http.post<any>(`Family`,member).then(res=>{
            console.log('addMember',res);
            const member:FamilyMember=res as FamilyMember
            dispatch(addMember(member));
            cb();
        }).catch(err=>{
            console.log('addMember',err);
            if(err){
                dispatch(showError([err]));
            }
        });
    }
}

export function GetMembers(){
    return async (dispatch:Dispatch)=>{
        await http.get<any>(`Family/Members`).then(res=>{
            const members:FamilyMember[]=res as FamilyMember[];
            dispatch(loadMembers(members));
        }).catch(err=>{
            console.log('GetMembers',err);
            if(err){
                dispatch(showError([err]));
            }
        });
    }
}

export function DeleteMember(id:number){
    return async (dispatch:Dispatch)=>{
        await http.post<any>(`Family/Delete/${id}`).then(res=>{
            const member:FamilyMember=res as FamilyMember;
            dispatch(removeMembers(member));
        }).catch(err=>{
            console.log('DeleteMember',err);
            if(err){
                dispatch(showError([err]));
            }
        });
    }
}

export const addMember=(member:FamilyMember)=>({
    type:FAMILY_CONSTS.ADD_MEMBER,
    payload:member
});

export const loadMembers=(members:FamilyMember[])=>({
    type:FAMILY_CONSTS.LOAD_MEMBERS,
    payload:members
});

export const removeMembers=(member:FamilyMember)=>({
    type:FAMILY_CONSTS.REMOVE_MEMBER,
    payload:member
});

