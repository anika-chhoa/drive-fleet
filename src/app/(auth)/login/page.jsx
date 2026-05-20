"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  Button,
  Card,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import { authClient } from "@/lib/auth-client";
import { Car, ShieldCheck, Sparkles } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function Login() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
    });
    console.log("SIGNIN RESPONSE:", data);
    console.log("TOKEN:", data?.session?.token || data?.session?.accessToken);
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Login Successfully");
      router.refresh();
      router.push("/");
    }
  };

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-[#000f21] text-white flex items-center justify-center px-4 py-10 overflow-hidden relative"
    >
      <div className="absolute inset-0 opacity-20 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-0 w-72 h-72 bg-[#FDB813]/20 blur-3xl rounded-full"
        />

        <motion.div
          animate={{
            y: [0, 25, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 right-0 w-72 h-72 bg-orange-500/10 blur-3xl rounded-full"
        />
      </div>

      <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center max-w-6xl w-full">
        <motion.div variants={fadeUp} className="hidden md:block">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FDB813]/20 bg-[#FDB813]/10 text-[#FDB813] text-sm font-medium mb-6"
          >
            <Sparkles size={16} />
            Premium Car Rental
          </motion.div>

          <h1 className="text-6xl font-bold leading-tight mb-6">
            Welcome <br />
            <span className="text-[#FDB813]">Back</span>
          </h1>

          <p className="text-[#b8c4d6] text-lg leading-relaxed max-w-lg mb-10">
            Login to continue exploring luxury cars, premium experiences, and
            exclusive member benefits.
          </p>

          <div className="space-y-5">
            <motion.div
              whileHover={{ x: 8 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FDB813]/10 border border-[#FDB813]/20 flex items-center justify-center">
                <Car className="text-[#FDB813]" size={20} />
              </div>

              <div>
                <h4 className="font-semibold">Luxury Fleet</h4>

                <p className="text-sm text-[#8fa3bf]">
                  Access premium and exotic vehicles instantly.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 8 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FDB813]/10 border border-[#FDB813]/20 flex items-center justify-center">
                <ShieldCheck className="text-[#FDB813]" size={20} />
              </div>

              <div>
                <h4 className="font-semibold">Secure Login</h4>

                <p className="text-sm text-[#8fa3bf]">
                  Safe authentication and protected access.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial={{
            opacity: 0,
            x: 60,
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <Card className="bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl rounded-3xl">
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-3 mb-8">
                <motion.div
                  whileHover={{
                    rotate: 8,
                    scale: 1.08,
                  }}
                  className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FDB813] to-orange-500 flex items-center justify-center"
                >
                  <Car className="text-[#000f21]" size={22} />
                </motion.div>

                <div>
                  <h2 className="text-3xl font-bold text-white">
                    Login Account
                  </h2>

                  <p className="text-sm text-[#9fb0c7]">
                    Access your premium account
                  </p>
                </div>
              </div>

              <Form
                className="grid grid-cols-1 gap-6 w-full"
                onSubmit={handleLogin}
                render={(props) => <form {...props} />}
              >
                <motion.div variants={fadeUp} className="w-full">
                  <TextField
                    name="email"
                    type="email"
                    isRequired
                    className="w-full"
                    validate={(value) => {
                      if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                      ) {
                        return "Please enter a valid email address";
                      }

                      return null;
                    }}
                  >
                    <Label>Email</Label>

                    <Input className="w-full" placeholder="Enter Your Email" />

                    <FieldError />
                  </TextField>
                </motion.div>

                <motion.div variants={fadeUp} className="w-full">
                  <TextField
                    name="password"
                    type={showPassword ? "text" : "password"}
                    isRequired
                    className="w-full"
                    validate={(value) => {
                      if (!value || value.length < 6) {
                        return "Password must be at least 6 characters";
                      }
                      return null;
                    }}
                  >
                    <Label>Password</Label>

                    
                    <div className="flex items-center w-full input py-0 my-0">
                      <Input
                        className="flex-1 outline-none"
                        placeholder="Enter Your Password"
                        type={showPassword ? "text" : "password"}
                      />

                      <button
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="text-[#8fa3bf] hover:text-[#FDB813] transition ml-2"
                      >
                        {showPassword ? (
                          <MdVisibility size={18} />
                        ) : (
                          <MdVisibilityOff size={18} />
                        )}
                      </button>
                    </div>

                    <FieldError />
                  </TextField>
                </motion.div>

                <motion.div
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="w-full"
                >
                  <Button
                    type="submit"
                    fullWidth
                    className="bg-gradient-to-r from-[#FDB813] to-orange-500 text-[#000f21] font-bold h-12"
                  >
                    Login
                  </Button>
                </motion.div>
              </Form>

              <div className="flex items-center gap-3 my-6">
                <div className="flex-1 h-px bg-white/10" />

                <span className="text-sm text-[#8fa3bf]">OR</span>

                <div className="flex-1 h-px bg-white/10" />
              </div>

              <motion.div
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
              >
                <Button
                  fullWidth
                  variant="bordered"
                  size="lg"
                  onPress={handleGoogleLogin}
                  className="border-white/10 bg-white/5 text-white hover:bg-white/10"
                >
                  <FcGoogle size={22} />
                  Continue with Google
                </Button>
              </motion.div>

              <p className="text-center text-sm text-[#8fa3bf] mt-6">
                Don't have an account?{" "}
                <Link
                  href="/register"
                  className="text-[#FDB813] font-semibold hover:opacity-80 transition"
                >
                  Register
                </Link>
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
}
