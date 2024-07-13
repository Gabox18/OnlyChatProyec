/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateChatRoom = /* GraphQL */ `
  subscription OnCreateChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
    onCreateChatRoom(filter: $filter) {
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
export const onUpdateChatRoom = /* GraphQL */ `
  subscription OnUpdateChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
    onUpdateChatRoom(filter: $filter) {
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
export const onDeleteChatRoom = /* GraphQL */ `
  subscription OnDeleteChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
    onDeleteChatRoom(filter: $filter) {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
    onCreatePost(filter: $filter) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
    onUpdatePost(filter: $filter) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
    onDeletePost(filter: $filter) {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onCreateMessage(filter: $filter) {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onUpdateMessage(filter: $filter) {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
    onDeleteMessage(filter: $filter) {
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
export const onCreateUserChatRooms = /* GraphQL */ `
  subscription OnCreateUserChatRooms(
    $filter: ModelSubscriptionUserChatRoomsFilterInput
  ) {
    onCreateUserChatRooms(filter: $filter) {
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
export const onUpdateUserChatRooms = /* GraphQL */ `
  subscription OnUpdateUserChatRooms(
    $filter: ModelSubscriptionUserChatRoomsFilterInput
  ) {
    onUpdateUserChatRooms(filter: $filter) {
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
export const onDeleteUserChatRooms = /* GraphQL */ `
  subscription OnDeleteUserChatRooms(
    $filter: ModelSubscriptionUserChatRoomsFilterInput
  ) {
    onDeleteUserChatRooms(filter: $filter) {
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
