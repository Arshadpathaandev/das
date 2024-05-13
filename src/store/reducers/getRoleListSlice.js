import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import makeApiRequest from "../../networkServices/axiosInstance";
import { apiUrls } from "../../networkServices/apiEndpoints";
import { notify } from "../../utils/utils";
import { setLoading } from "./loadingSlice/loadingSlice";

const initialState = {
  GetRoleList: [],
  loading: false,
  error: "",
  message: "",
  success: false,
};

export const GetRoleListByEmployeeIDAndCentreID = createAsyncThunk(
  "GetRoleList",
  async ({ data, CentreID, EmployeeID }, { dispatch }) => {
    const options = {
      method: "get",
      data,
    };
    try {
      dispatch(setLoading(true));
      const data = await makeApiRequest(
        `${apiUrls.getRoleList}?CentreID=${CentreID}&EmployeeID=${EmployeeID}`,
        options
      );
      console.log("awerstyujikl", data);
      dispatch(setLoading(false));
      return data;
    } catch {
      dispatch(setLoading(false));
    }
  }
);

export const getRoleListSlice = createSlice({
  name: "GetRoleList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetRoleListByEmployeeIDAndCentreID.pending, (state) => {
        state.loading = true;
        state.error = "";
        state.success = false;
      })
      .addCase(
        GetRoleListByEmployeeIDAndCentreID.fulfilled,
        (state, { payload }) => {
          console.log(payload);
          state.GetRoleList = payload;
          state.loading = false;
          state.success = true;
          state.error = "";
          state.message = payload;
        }
      )
      .addCase(
        GetRoleListByEmployeeIDAndCentreID.rejected,
        (state, { error }) => {
          console.log(error.message);
          state.loading = false;
          state.error = error.message;
          state.success = false;
          state.message = error.message;
          notify(error.message, "error");
        }
      );
  },
});

export default getRoleListSlice.reducer;
