import { ConnectKitButton } from "connectkit";

export default function Header(){
    return(
        <div>
            
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative flex justify-between py-8 z-0">
        <ConnectKitButton showAvatar={true} />
     </div>
        </div>
    )
}