import { View, ActivityIndicator, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Layout, Text } from '@ui-kitten/components';
import { useForm, SubmitHandler } from "react-hook-form";

import { AppStackParamList } from "../../routes";
import { styles } from '../../theme/styles';
import { MyButton, MyLinkButton } from '../../common/components/buttons';
import { DividerWithLabel, Logo, MyView } from '../../common/components/layouts';
import { IconGoogle } from '../../assets/icons/Google';
import { IconApple } from '../../assets/icons/Apple';
import { IconLock } from '../../assets/icons/Lock';
import { IconProfile } from '../../assets/icons/Profile';
import { IconMessage } from '../../assets/icons/Message';
import { colors } from '../../theme/vars';
import { SendOtp } from './signupUtil';
import { FormInput, FormInputPassword } from '../../common/components/Forms/FormInput';
import { regex } from '../../common/constants';
import { SignUpForm } from '../../common/types';

export {View, ActivityIndicator, ScrollView,useNavigation,StackNavigationProp,Layout, Text,
    useForm, SubmitHandler,AppStackParamList,styles,MyButton, MyLinkButton,
    DividerWithLabel, Logo, MyView,IconGoogle,IconApple,IconLock,IconProfile,
IconMessage,colors,SendOtp,FormInput,FormInputPassword,regex,SignUpForm}