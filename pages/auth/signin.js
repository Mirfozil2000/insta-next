import React from 'react';
import { getProviders, signIn } from 'next-auth/react';
import Header from '@/components/Header';

export default function SignIn({ providers }) {
    return (
        <>
            <Header />
            <div className="flex justify-center mt-20 space-x-7">
                <img
                    className='hidden object-cover md:inline-flex md:w-48'
                    src='https://metricool.com/wp-content/uploads/HOW-TO-PUBLISH-ON-INSTAGRAM.jpg'
                    alt='instagram' />
                <div>
                    {Object.values(providers).map((provider) => (
                        <div key={provider.name} className='flex flex-col items-center'>
                            <img className='object-cover w-32' src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" alt="insta" />
                            <p className="my-10 text-sm italic text-center">This application is created for learning</p>
                            <button
                                onClick={() => signIn(provider.id, { callbackUrl: '/' })}
                                className="p-3 text-white bg-red-400 rounded-lg hover:bg-red-500">
                                    Sign in with {provider.name}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export async function getServerSideProps(context) {
    const providers = await getProviders();
    return {
        props: {
            providers
        }
    }
}