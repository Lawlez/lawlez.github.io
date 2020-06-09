import { makeStyles } from '@tim/functional'
export const useStyles = makeStyles(theme => ({
    Button: {
        margin: theme.spacing(1),
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2)
    }
}))

export default useStyles
