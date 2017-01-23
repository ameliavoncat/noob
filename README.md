#Domains

* ######User
  * Mentor
  * Noob
  * Admin

* ######Roles
  * id ( serial )
  * type ( string )

* ######Template_tasks
  * id ( serial )
  * body ( txt )
  * user_type
  * created_at

* ######Task
  * user_id ( noob or mentor )
  * body
  * is_complete
  * due_date

* ######User
  * id ( serial )
  * github_handle
  * roles ( array )
  * created_at
  * updated_at
  * email
  * full_name

* ######Noob
  * user_id
  * start_date
  * mentor_id
