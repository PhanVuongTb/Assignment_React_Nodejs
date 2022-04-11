import React from 'react'

type Props = {}

const Banner = (props: Props) => {
    return (
        <div>
            <div className="md:flex md:flex-row mt-20">
                <div className="md:w-2/5 flex flex-col justify-center items-center">
                    <h2 className="font-serif text-5xl text-gray-600 mb-4 text-center md:self-start md:text-left pl-10">iPhone 13 128GB
                    </h2>
                    <p className="uppercase flex text-black-300 tracking-wide text-center md:self-start md:text-left pl-10"><svg className="h-4 w-4 text-red-500 pr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx={12} cy={10} r={3} />
                    </svg>Bảo hành 2 năm chính
                        hãng.</p>
                    <p className="flex uppercase text-black-300 tracking-wide text-center md:self-start md:text-left pl-10"><svg className="h-4 w-4 text-red-500 pr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx={12} cy={10} r={3} />
                    </svg>Tặng PMH 200.000đ
                        mua Sạc Magsafe.</p>
                    <p className="flex uppercase text-black-300 tracking-wide text-center md:self-start md:text-left pl-10"><svg className="h-4 w-4 text-red-500 pr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx={12} cy={10} r={3} />
                    </svg>Tặng PMH 300.000đ
                        mua Ốp lưng chính hãng .</p>
                </div>
                <div className="md:w-3/5">
                    <img src="https://images.fpt.shop/unsafe/fit-in/960x640/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2021/11/4/637716428589973121_4.jpg" className="w-10/12" />
                </div>
            </div>

        </div>

    )
}

export default Banner