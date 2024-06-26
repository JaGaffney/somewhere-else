export const getBackgroundColor = (color: string): string => {
    if (color === null || color === undefined) {
        return ""
    }


    switch (color.toLowerCase()) {
        case ("shop"): {
            return "var(--amber500)";
        }
        case ("bank"): {
            return "var(--amber800)";
        }
        case ("forestry"): {
            return "var(--green700)";
        }
        case ("metalwork"):
        case ("mining"): {
            return "var(--gray600)";
        }
        case ("scholar"): {
            return "var(--violet900)";
        }
        case ("general"): {
            return "var(--violet700)";
        }
        case ("warrior"): {
            return "#c3986a";
        }
        case ("archer"): {
            return "#9dc762";
        }
        case ("magician"): {
            return "#3bc6ec";
        }
        default:
            return "inherit"
    }
}


export const getTextColor = (color: string): string => {
    if (color === null || color === undefined) {
        return ""
    }



    switch (color.toLowerCase()) {
        case ("shop"):
        case ("metalwork"):
        case ("warrior"):
        case ("archer"):
        case ("magician"): {
            return "var(--gray900)";
        }
        case ("bank"):
        case ("general"):
        case ("forestry"):
            {
                return "var(--gray100)";
            }

        default:
            return "inherit"
    }
}



export const getResearchBorderColor = (color: string): string => {
    if (color === null || color === undefined) {
        return ""
    }

    switch (color.toLowerCase()) {
        case ("global"): {
            return "var(--teal800)";
        }
        case ("job"): {
            return "var(--amber700)";
        }
        case ("combat"): {
            return "var(--violet900)";
        }
        default:
            return "inherit"
    }
}

export const getRarityColor = (rarity: string): string => {
    let color = ""
    switch (rarity) {
        case ("COMMON"):
            color = "var(--gray100)"
            break;
        case ("RARE"):
            color = "var(--blue400)"
            break;
        default:
            color = "var(--gray100)"
    }
    return color
}