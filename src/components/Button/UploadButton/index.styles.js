import { makeStyles } from '@tim/functional'
export const useStyles = makeStyles(theme => ({
    root: {
        color: 'rgba(0,0,0,0.54)',
        '& > *': {
            width: 'fit-content'
        },
        '& span': {
            padding: theme.spacing(1)
        },
        '& p': {
            margin: 0,
            marginLeft: theme.spacing(2)
        }
    },
    input: {
        display: 'none'
    }
}))
export default useStyles
