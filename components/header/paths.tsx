import { HomeIcon, PhotoIcon, UsersIcon } from "@heroicons/react/24/outline";
import { defaultIconSize } from "@/components/icons/icon";

export interface Path {
    name: string,
    path: string,
    icon?: Component,
}

const paths = [
    {
        name: "Hjem",
        path: "/",
        icon: <HomeIcon width={ defaultIconSize } />
    },
    {
        name: "Galleri",
        path: "/galleri",
        icon: <PhotoIcon width={ defaultIconSize } />
    },
    {
        name: "Om oss",
        path: "/om-oss",
        icon: <UsersIcon width={ defaultIconSize } />
    }
];

export default paths;
