/**
 * @file API connection unit tests
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

describe('API responses', () => {
  it('Resolves successfully when retreiving a a year.', async () => {
    console.warn('Response to ...')

    try {
      const { register_user } = UserController
      const { create_profile } = AccountController

      // Mock account registration and profile creation
      let register = await register_user(UserMocks.valid)
      await create_profile(register.uid, AccountMocks.valid)

      // Check that data was properly handled
      expect(register.uid).toBe(UserMocks.valid.uid)

      let user = await AccountController.get_user_account(register.uid)

      // Check that we can get a user, and data has persisted
      expect(user.uid).toBe(UserMocks.valid.uid)
      expect(user.customClaims.gender).toBe(AccountMocks.valid.gender)
      expect(user.customClaims.age).toBe(21)

      // Check that we can remove a user
      let removed = await AccountController.remove_account(user.uid)
      expect(removed).toBe(true)
    } catch (err) {
      console.error('Error testing user registration function.\n', err)
    }
  })
})
