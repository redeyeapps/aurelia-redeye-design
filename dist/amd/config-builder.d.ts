/**
* Plugin configuration builder
*/
export declare class ConfigBuilder {
    globalResources: string[];
    useGlobalResources: boolean;
    useAll(): ConfigBuilder;
    useNavbar(): ConfigBuilder;
    useForm(): ConfigBuilder;
    useSpreadsheet(): ConfigBuilder;
    /**
    * Don't globalize any resources
    * Allows you to import yourself via <require></require>
    */
    withoutGlobalResources(): ConfigBuilder;
}
