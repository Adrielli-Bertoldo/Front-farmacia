function Home() {
    return (
        <>
            <div className="bg-blue-200 flex justify-center">
                <div className='container grid grid-cols-2 text-black'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            ON FARM
                        </h2>
                        <p className='text-xl'>
                            Farmácia online: cuidado que chega rápido!
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className="flex justify-around gap-4">
                                {/* <ModalPostagem /> */}
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://www.agenciaeplus.com.br/wp-content/uploads/2020/04/farmaciaonline2.jpg"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home