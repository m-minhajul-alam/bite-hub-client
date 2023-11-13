import errorGif from '../../assets/404.gif';

const Error = () => {
    return (
        <div>
            <img src={errorGif} className='w-full h-screen' alt="" />
        </div>
    );
};

export default Error;