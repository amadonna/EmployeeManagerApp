package io.boloprojects.firstangular.exceptions;

public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(String string) {
        super(string);
    }
}
