import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import c from "./ProfileDescriptionForm.module.scss";
import {Input, Textarea} from "../../../common/FormsControls";
import {UserProfileType} from "../../../../types/types";


const ProfileDescriptionForm: React.FC<InjectedFormProps<UserProfileType>> = (
    {
        handleSubmit,
        initialValues,
        error
    }
) => {
  return(
      <form onSubmit={handleSubmit}>
          <div className={c.fullName}>
              <b>Full name</b>: <Field
                  component={Input}
                  type={'text'}
                  name={'fullName'}
                  placeholder={'Full name'}
              />
          </div>
          <div>
              <b>About me</b>: <Field
              component={Textarea}
              name={'aboutMe'}
              placeholder={'About me...'}
          />
          </div>
          <div>
              <b>Looking for a job</b>: <Field
              component={Input}
              type={'checkbox'}
              name={'lookingForAJob'}
          />
          </div>
          <div>
              <b>Looking for a job description</b>: <Field
              component={Textarea}
              name={'lookingForAJobDescription'}
              placeholder={'Description...'}
          />
          </div>
          <div>
              <b>Contacts</b>: {
              Object.keys({...initialValues.contacts}).map(key =>
                  <Field
                      key={key}
                      component={Input}
                      type={'text'}
                      name={`contacts.${key}`}
                      placeholder={key}
                  />
              )
          }
          </div>
          {
              error && <div className={c.errorMessage}>
                  {error}
              </div>
          }
          <div>
              <button>Save</button>
          </div>
      </form>
  )
}

export default reduxForm({form: 'profileDescription'})(ProfileDescriptionForm);
