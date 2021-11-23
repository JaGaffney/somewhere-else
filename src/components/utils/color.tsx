export const getBackgroundColor = (color: string): string => {
    if (color === null) {
        return ""
    }

    switch (color.toLowerCase()) {
        case ("shop"): {
            return "var(--amber500)";
        }
        case ("bank"): {
            return "var(--amber800)";
        }
        case ("bushcraft"): {
            return "var(--green700)";
        }
        case ("metalwork"): {
            return "var(--gray600)";
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
    if (color === null) {
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
        case ("bushcraft"):
            {
                return "var(--gray100)";
            }

        default:
            return "inherit"
    }
}