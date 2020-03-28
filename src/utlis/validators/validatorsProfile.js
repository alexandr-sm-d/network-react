export const validatorEmptyPost = value => value ? undefined : "you can not submit empty post"

export const validatorMaxLength = maxLength =>
    value => value.length > maxLength
        ? `Must be ${maxLength} characters or less`
        : undefined



