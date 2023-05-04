import React from 'react'
import { MutatingDots } from 'react-loader-spinner'

function Loading() {
    return (
        <div>
            <div className='absolute top-0 flex justify-center w-full min-h-screen items-center' style={{backgroundColor : "#00000094"}}>
                <div className='bg-white p-4 rounded-xl'>
                    <MutatingDots
                        height="100"
                        width="100"
                        color="#4fa94d"
                        secondaryColor='#4fa94d'
                        radius='12.5'
                        ariaLabel="mutating-dots-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />
                </div>
            </div>
        </div>
    )
}

export default Loading
