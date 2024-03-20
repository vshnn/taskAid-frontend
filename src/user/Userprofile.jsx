import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Pen } from 'lucide-react';

const Userprofile = () => {
    return (
        <main>

            <div className="relative my-20 flex flex-col h-auto w-[80%] bg-[#25282d] mx-auto shadow-xl rounded-3xl pb-10">
                <div className="px-6">
                    <div className="flex flex-wrap justify-between">
                        <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center ">
                            <div className="relative">
                                <img alt="profile-pic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYLsf64WsPfeSg0_Q2nUThvjIb_gpTYY8XmA&usqp=CAU" className="shadow-xl rounded-full h-[150px] align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 min-w-[160px]" />
                            </div>
                        </div>
                        <div className="order-2">
                            <div className="py-6 px-3 mt-32 sm:mt-0">
                                <button className="text-[#17191C] font-bold bg-white text-sm border border-gray-700 px-4 py-2 rounded ">
                                    EDIT
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="pl-10 mt-2">
                        <h3 className="text-3xl font-semibold leading-normal text-white-700 ">
                            Kagura Yato
                        </h3>
                        <div className="text-sm leading-normal mb-2 text-gray-400">
                            Employee
                        </div>
                        <div className="text-lg leading-normal text-white-700">
                            <div className="mb-5"> 
                                About
                                <div className="leading-4 mt-3 text-base border-b-2 py-2  text-gray-400 w-2/5 flex gap-3 items-center">
                                    <Pen />Going with the flow
                                </div>
                            </div>
                            <div className="mb-5">
                                Email
                                <div className="leading-4 mt-3 text-base border-b-2 py-2  text-gray-400 w-2/5 flex gap-3 items-center">
                                    <Mail/>koko@gmail.com
                                </div>
                            </div>
                            <div className="mb-5">
                                Phone Number
                                <div className="leading-4 mt-3 text-base border-b-2 py-2  text-gray-400 w-2/5 flex gap-3 items-center">
                                <Phone />+91 9090797977
                                </div>
                            </div>
                            <div className=""> 
                                Organization ID
                                <div className="leading-4 mt-3 text-base border-b-2 py-2  text-gray-400 w-2/5 flex gap-3 items-center">
                                    <Pen />GH19VF356
                                </div>
                            </div>
                        </div>        
                    </div>
                </div>
            </div>
        </main>

    );
};

export default Userprofile;
