import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };

  return (
    <div className="mb-8">
      <div className="divider">or</div>
      <div className=" w-full flex justify-center gap-3">
        <button onClick={handleGoogleSignIn} className="btn btn-outline rounded-full">
          <FaGoogle className="mr-2"></FaGoogle>
          Google
        </button>
        <button title="comming soon!" className="btn btn-outline rounded-full">
          <FaFacebook className="mr-2"></FaFacebook>
          Facebook
        </button>
        <button title="comming soon!" className="btn btn-outline rounded-full">
          <FaGithub className="mr-2"></FaGithub>
          GitHub
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
