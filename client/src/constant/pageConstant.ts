export enum PageConstant {
  // basic login path
  BASE_LOGIN = '/login',
  // basic home path
  BASE_HOME = '/home',
  // error page path
  ERROR_PAGE = '/exception',
}

// sidebar extion
export enum action {
  admin_tables,
  admin_people,
  admin_project,
  admin_calendar,
  admin_addPracticum,
  admin_reports,
  admin_rooms,
  admin_asdos,
  admin_subject,
  student_calendar,
  student_class,
  asdos_timesheet,
}

// role or auth type
export enum role {
  admin,
  asdos,
  student,
  guest,
}
