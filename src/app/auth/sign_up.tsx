import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

import { Link, router } from 'expo-router';
import { useState} from 'react'

import Button from '../../components/Button';

const handlePress = (): void => {
    // 会員登録
    router.push('/memo/list')
}

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <View style={styles.container}>
            <View style={styles.inner}>
                <Text style={styles.title}>Sign Up</Text>
                <TextInput
                    onChangeText={(text) => { setEmail(text) }}
                    style={styles.input}
                    value={email}
                    autoCapitalize='none'
                    keyboardType='email-address'
                    placeholder='Email Address'
                    textContentType='emailAddress'
                />
                <TextInput
                    onChangeText={(text) => setPassword(text)}
                    style={styles.input}
                    value={password}
                    autoCapitalize='none'
                    secureTextEntry
                    placeholder='Password'
                    textContentType='password' 
                />

                <Button label='Submit' onPress={handlePress} />
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Already registered?</Text>
                    <Link href={'/auth/log_in'} asChild>
                        <TouchableOpacity>
                            <Text style={styles.footerLink}>Log In.</Text>
                        </TouchableOpacity>
                    </Link>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F4F8'
    },
    inner: {
        paddingVertical: 24,
        paddingHorizontal: 27
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        lineHeight: 32,
        marginBottom: 24
    },
    input: {
        borderWidth: 1,
        borderColor: '#dddddd',
        backgroundColor: '#ffffff',
        height: 48,
        padding: 8,
        fontSize: 16,
        marginBottom: 16
    },
    footer: {
        flexDirection: 'row',
    },
    footerText: {
        fontSize: 14,
        lineHeight: 24,
        marginRight: 8,
        color: '#000000'
    },
    footerLink: {
        fontSize: 14,
        lineHeight: 24,
        color: '#467FD3'
    }

})

export default SignUp
