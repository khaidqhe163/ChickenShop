
export interface IRouteModel {
    path: string;
    component: React.ElementType;
    children?: IChildRouteModel[];
    name?: string;
}

export interface IChildRouteModel {
    path: string;
    component: React.ElementType;
    index: boolean;
    children?: IChildRouteModel[];
}
