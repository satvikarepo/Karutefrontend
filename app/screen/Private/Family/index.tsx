import {useEffect} from "react";
import { Layout, Text } from '@ui-kitten/components';
import { ScrollView } from 'react-native';
import { useForm, SubmitHandler } from "react-hook-form";

import { styles } from '../../../theme/styles';
import { MyCard, MyView } from '../../../common/components/layouts';
import { FormInput } from '../../../common/components/Forms/FormInput';
import { FamilyMember } from '../../../common/types';
import { IconProfile } from '../../../assets/icons/Profile';
import { IconMessage } from '../../../assets/icons/Message';
import { colors } from '../../../theme/vars';
import { FormSelect } from '../../../common/components/Forms/FormSelect';
import { MyButton, regex } from '../../Signup/imports';
import { FormDate } from '../../../common/components/Forms/FormDate';
import { FormRadio } from '../../../common/components/Forms/FormRadio';
import { genders, relations } from '../../../common/constants';
import FamilyCard from './FamilyCard';
import { useDispatch, useSelector } from '../../../redux/store';
import { SaveFamilyMember, GetMembers, DeleteMember } from '../../../redux/actions/family';
import { IconEmpty } from '../../../assets/icons/Empty';


const Family = () => {
    const form = useForm<FamilyMember>();
    const dispatch = useDispatch();
    const memberList = useSelector(state => state.family.members);
    const { control, handleSubmit, reset, setValue, formState: { errors } } = form;

    useEffect(()=>{
        if(memberList.length==0){
            dispatch(GetMembers());
        }
    },[])

    const onSubmit: SubmitHandler<FamilyMember> = (data, e) => {
        e?.preventDefault();
        console.log(data);
        dispatch(SaveFamilyMember(data,()=>{
            reset();
        }));
        return false;
    }

    const onDelete=(id:number)=>{
        dispatch(DeleteMember(id));
    }

    return <ScrollView style={styles.scrollView}>
        <Layout style={[styles.tabContainer, {}]}>
            <MyCard>
                <MyView style={styles.row}>
                    <FormInput size='medium' control={control}
                        rules={{
                            required: "Name is required.",
                            pattern: { value: regex.onlyAlphabets, message: "Only alphabets allowed." }
                        }}
                        postfix={<IconProfile color={colors.border} />}
                        label={<Text>Full Name</Text>}
                        error={errors.fullName && errors.fullName?.message}
                        placeholder='Full name' name='fullName' />
                </MyView>
                <MyView style={styles.row}>
                    <FormSelect size='medium' control={control}
                        setValue={setValue}
                        rules={{
                            required: "Relation is required.",
                        }}
                        data={relations}
                        postfix={<IconProfile color={colors.border} />}
                        label={<Text>Relation</Text>}
                        error={errors.relation && errors.relation?.message}
                        placeholder='Select Relation' name='relation' />
                </MyView>
                {/* {<Text>{JSON.stringify(getValues()) || 'na'}</Text>} */}
                <MyView style={styles.row}>
                    <FormInput size='medium' control={control}
                        rules={{
                            required: "Email is required.",
                            pattern: { value: regex.email, message: "Invalid email." }
                        }}
                        postfix={<IconMessage color={colors.border} />}
                        label={<Text>Email</Text>}
                        error={errors.email && errors.email?.message}
                        placeholder='Email' name='email' />
                </MyView>
                <MyView style={styles.row}>
                    <FormDate control={control} name='dob'
                        rules={{
                            required: "DOB is required.",
                        }}
                        max={new Date()}
                        error={errors.dob && errors.dob?.message}
                        setValue={setValue} label={<Text>DOB</Text>} />
                </MyView>
                <MyView mb={16}>
                    <FormRadio data={genders}
                        defaultVal='Male'
                        setValue={setValue} control={control} name='gender' />
                </MyView>
                <MyButton onPress={handleSubmit(onSubmit)}>Add Member</MyButton>
            </MyCard>
            <MyView mt={16} mb={16}>
                <>
                    {memberList.length == 0 && <MyView fullW alignItems='center' pd={24} borderRadius={20}>
                        <IconEmpty color={colors.border} />
                        <Text appearance='hint' category='s1' >No family members added</Text>
                    </MyView>}
                </>
                <>
                    {memberList.length > 0 && <>
                        <MyView mb={16}>
                            <Text category='s1' style={{ fontWeight: 'bold' }}>Family Member List</Text>
                        </MyView>
                        <>
                            {memberList && memberList.map(item => <FamilyCard key={item.id} 
                            onDelete={onDelete}
                            mb={16} data={item} />)}
                        </>
                    </>}
                </>

            </MyView>
        </Layout>
    </ScrollView>
}

export default Family;