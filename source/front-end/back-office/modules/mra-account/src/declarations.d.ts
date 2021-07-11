declare module "@mra/utility" {
  export function changeLanguage(language: string);
  export function getCurrentUserRoles(): Promise<string[]>;
  export const API: any;
  export const resources: any;
}

declare module "@mra/theme" {
  export {
    Box,
    Hidden,
    Collapse,
    IconButton,
    Avatar,
    fade,
    makeStyles,
    Theme,
    useMediaQuery,
    Grid,
    Drawer,
    Toolbar,
    AppBar,
    Paper,
    ListItem,
    ListItemIcon,
    ListItemText,
    CardContent,
    CardHeader,
    Container,
    Card,
    TextField,
    TextFieldProps,
    InputAdornment,
    Dialog,
    DialogContent,
    DialogTitle,
    Chip,
    ChipProps,
  } from "@material-ui/core";

  export const MLogo;
  export const MIconMenu;
  export const SearchField;
  export const MProvider;
  export const MButton;
  export const MTypography;
  export const MDataTable;
}
