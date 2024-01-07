"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import NewsTable from "@/features/experiment/components/NewsTable";
import { useLoginMutation } from "@/features/graphql/typesafeAccess/login.gen";
import { useNewsQuery } from "@/features/graphql/typesafeAccess/news.gen";

export type FormValue = z.infer<typeof schema>;

const schema = z.object({
  email: z.string(),
  password: z.string(),
});
const values: FormValue = {
  email: "",
  password: "",
};

export default function Page() {
  const router = useRouter();
  const { data, loading, error, refetch } = useNewsQuery();

  const [login] = useLoginMutation();

  const { register, handleSubmit } = useForm({
    resolver: zodResolver(schema),
    values,
  });

  const handleLogin = handleSubmit(async (value: FormValue) => {
    const response = await login({
      variables: {
        email: value.email,
        password: value.password,
      },
    });
    localStorage.setItem("token", response.data?.login?.token ?? "");
    await refetch();
  });

  const handleLogout = () => {
    localStorage.setItem("token", "");
    router.refresh();
  };

  return (
    <>
      {!data ? (
        <Box
          mt={32}
          display="flex"
          justifyContent="center"
          onSubmit={handleLogin}
          component="form">
          <TextField
            id="email"
            type="email"
            label="email"
            {...register("email")}
          />
          <TextField
            id="password"
            type="password"
            label="password"
            {...register("password")}
          />
          <input type="submit" />
        </Box>
      ) : (
        <>
          <NewsTable
            title="Typesafe GraphQL CSRサンプル（制限なしアクセス）"
            data={data?.allNews}
            isLoading={loading}
            error={error}
            path="/experimental/typesafe-graphql-csr"
          />
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </>
  );
}
