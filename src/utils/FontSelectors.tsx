const fontSelector = (fontName: string) => {

    if (fontName == 'regular')
        return 'Poppins-Regular';
    else if (fontName == 'medium')
        return 'Poppins-Medium';
    else if (fontName == 'bold')
        return 'Poppins-Bold';
    else if (fontName == 'light')
        return 'Poppins-Light';
    else if (fontName == 'semi-bold')
        return 'Poppins-SemiBold';
    else if (fontName == 'thin')
        return 'Poppins-Thin';
}
module.exports = fontSelector;