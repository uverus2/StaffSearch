//Global functions that can be included in any component/page. The functions could repeat that is why they are abstracted.
//On larger scale applications it might not be useful however the approach can be taken between groups of components. 
export function capitalizeFirstLetter (string) {
    if (string) return string.charAt(0).toUpperCase() + string.slice(1);
};

export function isObjectEmpty(obj) {
    return Object.keys(obj).length === 0;
};

export function returnTrueString(value) {
    return value ? value : "";
};

export function formatNationality(value){
    let natFull = "";

    if(!value) return ;

    switch(value.toUpperCase()) {
        case "US":
            natFull = "American";
            break;
        case "GB":
            natFull = "British";
            break;
        case "AU":
            natFull = "Australian";
            break;
        case "NO":
            natFull = "Norwegian";
            break;
        case "NL":
            natFull = "Dutch ";
            break;
        case "FR":
            natFull = "French";
            break;
        case "IE":
            natFull = "Irish";
            break;
        case "DK":
            natFull = "Danish";
            break;
        default:
            natFull = value;
    }

    return natFull;
}

