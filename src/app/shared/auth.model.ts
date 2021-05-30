export class User {
  username: string;

  password: string;
}

export class Register {
  username: string;
  password: string;
  empid: string;
  name: string;
  email: string;
  phone: number;
  designation: string;
  address: string;
}

export class Register_Response {
  log_id: string;
  emp_id: string;
  emp_name: string;
  emp_email: string;
  emp_phone: string;
  emp_designation: string;
  emp_address: string;
  emp_status: string;
  updated_at: string;
  created_at: string;
  id: number;
}

export class Login_Response {
  login_id: string;
  login_username: string;
  login_password: string;
  login_role: string;
  login_status: string;
  created_at: string;
  updated_at: string;
  auth_key: string;
}
export class Logout {
  username: string;
  authkey: string;
}
