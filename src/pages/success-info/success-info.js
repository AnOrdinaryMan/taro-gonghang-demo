import Taro, { Component } from '@tarojs/taro'
import { View, Text, Icon, Image } from '@tarojs/components'
import './success-info.scss'

import Title from '@components/title'
import appIcon from './assets/appIcon.png'

import { getWindowHeight } from '@utils/style'

export default class SuccessInfo extends Component {
    render () {
        return (
            <View className='success-submit' style={{ height: getWindowHeight() }}>
                {process.env.TARO_ENV === 'h5' ? <Title /> : <View />}

                <View className='success-submit-tip'>
                <View className='success-submit-tip-icon'>
                    <Icon className='success-submit-tip-icon-ins' type='success' size='36' color='#09BB07'></Icon>
                    </View>
                    <Text className='success-submit-tip-text'>提交成功</Text>
                </View>

                <View className='success-submit-image-view'>
                    <Text className='success-submit-image-view-txt'>工银信用卡官方App—</Text>
                    <Image src={appIcon} className='success-submit-image'/>
                </View>

                <View>
                    <View className='success-submit-number'>
                        <View className='success-submit-title-left'>
                            <Text className='success-submit-title-left-txt'>申请单编号：</Text>
                        </View>
                        <View className='success-submit-title-center'>
                            <Text className='success-submit-title-center-txt'>36022019190400961</Text>
                        </View>
                        <View className='success-submit-title-right'>
                        </View>
                    </View>

                    <View className='success-submit-describe-view'>
                        <View className='success-submit-describe'>
                            <View className='success-submit-left'>
                                <Text className='success-submit-left-txt'>信用卡产品：</Text>
                            </View>
                            <View className='success-submit-center'>
                                <Text className='success-submit-center-txt'>故宫·九有一心红白金</Text>
                            </View>
                            <View className='success-submit-right'>
                                <Icon type='success_no_circle' size='26' color='#09BB07'></Icon>
                            </View>
                        </View>

                        <View className='success-submit-describe'>
                            <View className='success-submit-left'>
                                <Text className='success-submit-left-txt'>卡片邮寄地址：</Text>
                            </View>
                            <View className='success-submit-center'>
                                <Text className='success-submit-center-txt'>广东省广州市**</Text>
                            </View>
                            <View className='success-submit-right'>
                                <Icon type='success_no_circle' size='26' color='#09BB07'></Icon>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}