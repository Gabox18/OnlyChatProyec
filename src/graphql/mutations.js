/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      firstName
      lastName
      profilePicture
      email
      status
      notificationToken
      chatRooms {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      firstName
      lastName
      profilePicture
      email
      status
      notificationToken
      chatRooms {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      firstName
      lastName
      profilePicture
      email
      status
      notificationToken
      chatRooms {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createChatRoom = /* GraphQL */ `
  mutation CreateChatRoom(
    $input: CreateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    createChatRoom(input: $input, condition: $condition) {
      id
      isSeenBy
      messages {
        nextToken
        __typename
      }
      lastMessage {
        id
        chatRoomID
        content
        createdAt
        updatedAt
        chatRoomMessagesId
        messageAuthorId
        __typename
      }
      participants {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      chatRoomLastMessageId
      __typename
    }
  }
`;
export const updateChatRoom = /* GraphQL */ `
  mutation UpdateChatRoom(
    $input: UpdateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    updateChatRoom(input: $input, condition: $condition) {
      id
      isSeenBy
      messages {
        nextToken
        __typename
      }
      lastMessage {
        id
        chatRoomID
        content
        createdAt
        updatedAt
        chatRoomMessagesId
        messageAuthorId
        __typename
      }
      participants {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      chatRoomLastMessageId
      __typename
    }
  }
`;
export const deleteChatRoom = /* GraphQL */ `
  mutation DeleteChatRoom(
    $input: DeleteChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    deleteChatRoom(input: $input, condition: $condition) {
      id
      isSeenBy
      messages {
        nextToken
        __typename
      }
      lastMessage {
        id
        chatRoomID
        content
        createdAt
        updatedAt
        chatRoomMessagesId
        messageAuthorId
        __typename
      }
      participants {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      chatRoomLastMessageId
      __typename
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      type
      author {
        id
        firstName
        lastName
        profilePicture
        email
        status
        notificationToken
        createdAt
        updatedAt
        __typename
      }
      content
      numberOfLikes
      likedBy
      createdAt
      updatedAt
      postAuthorId
      __typename
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      type
      author {
        id
        firstName
        lastName
        profilePicture
        email
        status
        notificationToken
        createdAt
        updatedAt
        __typename
      }
      content
      numberOfLikes
      likedBy
      createdAt
      updatedAt
      postAuthorId
      __typename
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      type
      author {
        id
        firstName
        lastName
        profilePicture
        email
        status
        notificationToken
        createdAt
        updatedAt
        __typename
      }
      content
      numberOfLikes
      likedBy
      createdAt
      updatedAt
      postAuthorId
      __typename
    }
  }
`;
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      chatRoomID
      author {
        id
        firstName
        lastName
        profilePicture
        email
        status
        notificationToken
        createdAt
        updatedAt
        __typename
      }
      content
      createdAt
      updatedAt
      chatRoomMessagesId
      messageAuthorId
      __typename
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
      id
      chatRoomID
      author {
        id
        firstName
        lastName
        profilePicture
        email
        status
        notificationToken
        createdAt
        updatedAt
        __typename
      }
      content
      createdAt
      updatedAt
      chatRoomMessagesId
      messageAuthorId
      __typename
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
      id
      chatRoomID
      author {
        id
        firstName
        lastName
        profilePicture
        email
        status
        notificationToken
        createdAt
        updatedAt
        __typename
      }
      content
      createdAt
      updatedAt
      chatRoomMessagesId
      messageAuthorId
      __typename
    }
  }
`;
export const createUserChatRooms = /* GraphQL */ `
  mutation CreateUserChatRooms(
    $input: CreateUserChatRoomsInput!
    $condition: ModelUserChatRoomsConditionInput
  ) {
    createUserChatRooms(input: $input, condition: $condition) {
      id
      userId
      chatRoomId
      user {
        id
        firstName
        lastName
        profilePicture
        email
        status
        notificationToken
        createdAt
        updatedAt
        __typename
      }
      chatRoom {
        id
        isSeenBy
        createdAt
        updatedAt
        chatRoomLastMessageId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateUserChatRooms = /* GraphQL */ `
  mutation UpdateUserChatRooms(
    $input: UpdateUserChatRoomsInput!
    $condition: ModelUserChatRoomsConditionInput
  ) {
    updateUserChatRooms(input: $input, condition: $condition) {
      id
      userId
      chatRoomId
      user {
        id
        firstName
        lastName
        profilePicture
        email
        status
        notificationToken
        createdAt
        updatedAt
        __typename
      }
      chatRoom {
        id
        isSeenBy
        createdAt
        updatedAt
        chatRoomLastMessageId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteUserChatRooms = /* GraphQL */ `
  mutation DeleteUserChatRooms(
    $input: DeleteUserChatRoomsInput!
    $condition: ModelUserChatRoomsConditionInput
  ) {
    deleteUserChatRooms(input: $input, condition: $condition) {
      id
      userId
      chatRoomId
      user {
        id
        firstName
        lastName
        profilePicture
        email
        status
        notificationToken
        createdAt
        updatedAt
        __typename
      }
      chatRoom {
        id
        isSeenBy
        createdAt
        updatedAt
        chatRoomLastMessageId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
