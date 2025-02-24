import { ActivityIndicator, View } from "react-native"
import colors from "../constants/colors"

const Loader = () => {
    return (
        <View style={{ height: '10%', backgroundColor: colors.white, justifyContent: 'center' }}>
            <ActivityIndicator color={colors.pink} size={'large'} />
        </View>
    )
}

export default Loader;