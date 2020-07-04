import { makeStyles } from '@tim/functional'
export const useStyles = makeStyles(theme => ({
    textField: {
        margin: theme.spacing(1),
        paddingRight: '0px'
    },
    passwordInput: {
        paddingRight: 0
    }
}))

export default useStyles
