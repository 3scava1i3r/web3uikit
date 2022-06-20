export interface ICodeAreaProps {
    /**
     * width of component
     * default is "100%"
     */
    maxWidth?: string;

    /**
     * height of component
     * default is "fit-content"
     */
    height?: string;

    /**
     * if true is expanded full size by default when maxHeight is used
     */
    isMaximized?: boolean;

    /**
     * standard onChange that returns the entire event, as normal you can access event.target
     */
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;

    /**
     * Custom JSX component inside header
     */
    headerComponent?: React.ReactNode;

    /**
     * please add the text you want to show in the codearea
     */
    text: string;

    /**
     * if true disabled editing of the text content
     * standard prop for textarea
     */
    disabled?: boolean;
}

export interface ILineNumbersProps {
    /**
     * current value
     */
    currentValue: string;
}
