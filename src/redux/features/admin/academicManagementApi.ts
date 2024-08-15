import { ResponseReduxProps } from "../../../types";
import { AcademicSemesterProps } from "../../../types/academicManagement.types";
import { baseApi } from "../../api/baseApi";

const academicManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllAcademicSemesters: builder.query({
      query: () => ({
        url: "/academic-semesters",
        method: "GET",
      }),
      transformResponse: (
        response: ResponseReduxProps<AcademicSemesterProps[]>
      ) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),

    createAcademicSemester: builder.mutation({
      query: (data) => ({
        url: "/academic-semesters/create-academic-semester",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAllAcademicSemestersQuery,
  useCreateAcademicSemesterMutation,
} = academicManagementApi;
