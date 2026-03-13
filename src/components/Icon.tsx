import { createIconSetFromIcoMoon } from "@expo/vector-icons"; 
import { useFonts } from "expo-font";

import fontData from '../../assets/fonts/icomoon.ttf';
import fontSelection from '../../assets/fonts/selection.json';

const CustomIconn = createIconSetFromIcoMoon(
    fontSelection,
    'IcoMoon',
    'icomoon.ttf'
)

const Icon = () => {
    const [fontsLoaded] = useFonts({
        IcoMoon: fontData,
    })
    if (!fontsLoaded) {
        return null
    }
    return (
        <CustomIconn name="plus" size={40} color={'red'}/>
    )
}

export default Icon
