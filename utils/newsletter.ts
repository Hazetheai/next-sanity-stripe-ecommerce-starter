type Modify<T, R> = Omit<T, keyof R> & R;

interface FormData {
  email: string;
  firstName: string;
  lastName: string;
}

interface EmptyFields {
  [key: string]: string;
}

interface FormattedFields {
  update_existing: boolean;
  members: MemberDetails[];
}

interface MemberDetails {
  email_address: string;
  status: string;
  merge_fields: EmptyFields;
}

type MergeData = Modify<
  EmptyFields,
  {
    EMAIL: string;
    FNAME: string;
    LNAME: string;
    SOURCE: string;
  }
>;

export function formatMergeFields(data: FormData): FormattedFields {
  const emptyFields: EmptyFields = {};

  emptyFields.FNAME = data.firstName;
  emptyFields.LNAME = data.lastName;
  emptyFields.EMAIL = data.email;
  emptyFields.SOURCE = "Site";

  const filledFields = emptyFields;

  const formattedFields: FormattedFields = {
    update_existing: true,
    members: [
      {
        email_address: data.email,
        status: "subscribed",
        merge_fields: filledFields,
      },
    ],
  };

  return formattedFields;
}

export async function postNewsLetterData(data: FormData) {
  try {
    return fetch("/api/mc", {
      method: "POST",
      body: JSON.stringify(formatMergeFields(data)),
    })
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
  } catch (err) {
    console.error(err);
  }
}
