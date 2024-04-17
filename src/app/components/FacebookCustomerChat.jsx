'use client'
import { FacebookProvider, CustomChat } from 'react-facebook';

export default function FacebookCustomerChat() {
    return (
        <div>
            <FacebookProvider appId="3650504921934930" chatSupport>
                <CustomChat pageId="271468249381947" minimized={true}/>
            </FacebookProvider> 
        </div>
    )
}
