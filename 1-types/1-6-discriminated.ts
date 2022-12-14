{
  // function: login -> success, fail
  type SuccessState = {
    result: "success";
    response: {
      body: string;
    };
  };
  type FailState = {
    result: "fail";
    reason: string;
  };
  type LoginState = SuccessState | FailState;
  function login(): LoginState {
    return {
      result: "success",
      response: {
        body: "logged in!",
      },
    };
  }

  // printLoginState(state)
  // success -> ๐
  // fail -> ๐ญ
  function printLoginState(state: LoginState) {
    if (state.result === "success") {
      // response๋ผ๋ key ๊ฐ state ์์ ์๋ค๋ฉด
      console.log(`๐ ${state.response.body}`);
    } else {
      console.log(`๐ญ ${state.reason}`);
    }
  }
}
