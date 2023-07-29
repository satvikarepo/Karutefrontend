import { Layout, Text } from '@ui-kitten/components';
import { Image, View, ScrollView } from 'react-native';
import { useForm, SubmitHandler } from "react-hook-form";
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation, RouteProp } from '@react-navigation/native';

import { Img } from '../../assets/Banners';
import { styles } from '../../theme/styles';
import { MyView } from '../../common/components/layouts';
import { AppPublicStackParamList, ChangePasswordForm } from '../../common/types';
import { MyButton } from '../../common/components/buttons';
import { FormInputPassword } from '../../common/components/Forms/FormInput';
import { IconLock } from '../../assets/icons/Lock';
import { colors } from '../../theme/vars';
import { useDispatch } from '../../redux/store';
import { logout } from '../../redux/actions/global';
import { closeModel, showModel } from '../../redux/actions/commonActions';
import { commanMessage } from '../../common/constants';
import { SubmitRecoverPassword } from '../OTPVerify/OtpUtil';
import OtpSuccess from '../OTPVerify/OtpSuccess';

export {Layout,Text,Image, View, ScrollView,useForm,SubmitHandler,StackNavigationProp,
    useNavigation,RouteProp, Img, styles, MyView,AppPublicStackParamList,ChangePasswordForm,MyButton,
FormInputPassword,IconLock,colors,useDispatch,logout,closeModel,showModel,commanMessage,
SubmitRecoverPassword,OtpSuccess} 