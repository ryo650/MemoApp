import { createIconSetFromIcoMoon } from "@expo/vector-icons"; 
import { useFonts } from "expo-font";

import fontData from '../../assets/fonts/icomoon.ttf';
import fontSelection from '../../assets/fonts/selection.json';

const CustomIconn = createIconSetFromIcoMoon(
    fontSelection,
    'IcoMoon',
    'icomoon.ttf'
)

interface Props {
    name: string
    size: number
    color: string
}

const Icon = (props: Props) => {
    const { name, size, color } = props
    const [fontsLoaded] = useFonts({
        IcoMoon: fontData,
    })
    if (!fontsLoaded) {
        return null
    }
    return (
        <CustomIconn name={name} size={size} color={color}/>
    )
}

export default Icon
