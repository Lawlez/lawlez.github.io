import { makeStyles } from '@tim/functional'

const useStyles = makeStyles(theme => ({
    infoBox: {
        backgroundColor: theme.palette.infoBox.background,
        border: ' 1px solid',
        borderColor: theme.palette.infoBox.border,
        padding: theme.spacing(5),
        paddingLeft: theme.spacing(14),
        paddingRight: theme.spacing(14)
    }
}))

export default useStyles
