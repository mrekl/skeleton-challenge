type StatusErrorMessage = 'COMPANY_NOT_FOUND' | 'USER_NOT_FOUND' | 'UNAUTHORIZED' | 'EMAIL_TAKEN' | 'INVALID_TOKEN';

export default class StatusError extends Error {
  constructor(public status: number, message: StatusErrorMessage) {
    super(message);
  }
}
