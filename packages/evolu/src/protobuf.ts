/* eslint-disable */
// @generated by protobuf-ts 2.7.0 with parameter eslint_disable
// @generated from protobuf file "protobuf.proto" (syntax proto3)
// tslint:disable
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message CrdtMessageContent
 */
export interface CrdtMessageContent {
  /**
   * @generated from protobuf field: string table = 1;
   */
  table: string;
  /**
   * @generated from protobuf field: string row = 2;
   */
  row: string;
  /**
   * @generated from protobuf field: string column = 3;
   */
  column: string;
  /**
   * @generated from protobuf oneof: value
   */
  value:
    | {
        oneofKind: "stringValue";
        /**
         * @generated from protobuf field: string stringValue = 4;
         */
        stringValue: string;
      }
    | {
        oneofKind: "numberValue";
        /**
         * @generated from protobuf field: int32 numberValue = 5;
         */
        numberValue: number;
      }
    | {
        oneofKind: undefined;
      };
}
/**
 * @generated from protobuf message EncryptedCrdtMessage
 */
export interface EncryptedCrdtMessage {
  /**
   * @generated from protobuf field: string timestamp = 1;
   */
  timestamp: string;
  /**
   * @generated from protobuf field: bytes content = 2;
   */
  content: Uint8Array;
}
/**
 * @generated from protobuf message SyncRequest
 */
export interface SyncRequest {
  /**
   * @generated from protobuf field: repeated EncryptedCrdtMessage messages = 1;
   */
  messages: EncryptedCrdtMessage[];
  /**
   * @generated from protobuf field: string userId = 2;
   */
  userId: string;
  /**
   * @generated from protobuf field: string nodeId = 3;
   */
  nodeId: string;
  /**
   * @generated from protobuf field: string merkleTree = 4;
   */
  merkleTree: string;
}
/**
 * @generated from protobuf message SyncResponse
 */
export interface SyncResponse {
  /**
   * @generated from protobuf field: repeated EncryptedCrdtMessage messages = 1;
   */
  messages: EncryptedCrdtMessage[];
  /**
   * @generated from protobuf field: string merkleTree = 2;
   */
  merkleTree: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class CrdtMessageContent$Type extends MessageType<CrdtMessageContent> {
  constructor() {
    super("CrdtMessageContent", [
      { no: 1, name: "table", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
      { no: 2, name: "row", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
      { no: 3, name: "column", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
      {
        no: 4,
        name: "stringValue",
        kind: "scalar",
        oneof: "value",
        T: 9 /*ScalarType.STRING*/,
      },
      {
        no: 5,
        name: "numberValue",
        kind: "scalar",
        oneof: "value",
        T: 5 /*ScalarType.INT32*/,
      },
    ]);
  }
}
/**
 * @generated MessageType for protobuf message CrdtMessageContent
 */
export const CrdtMessageContent = new CrdtMessageContent$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EncryptedCrdtMessage$Type extends MessageType<EncryptedCrdtMessage> {
  constructor() {
    super("EncryptedCrdtMessage", [
      { no: 1, name: "timestamp", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
      { no: 2, name: "content", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
    ]);
  }
}
/**
 * @generated MessageType for protobuf message EncryptedCrdtMessage
 */
export const EncryptedCrdtMessage = new EncryptedCrdtMessage$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SyncRequest$Type extends MessageType<SyncRequest> {
  constructor() {
    super("SyncRequest", [
      {
        no: 1,
        name: "messages",
        kind: "message",
        repeat: 1 /*RepeatType.PACKED*/,
        T: () => EncryptedCrdtMessage,
      },
      { no: 2, name: "userId", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
      { no: 3, name: "nodeId", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
      { no: 4, name: "merkleTree", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
    ]);
  }
}
/**
 * @generated MessageType for protobuf message SyncRequest
 */
export const SyncRequest = new SyncRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SyncResponse$Type extends MessageType<SyncResponse> {
  constructor() {
    super("SyncResponse", [
      {
        no: 1,
        name: "messages",
        kind: "message",
        repeat: 1 /*RepeatType.PACKED*/,
        T: () => EncryptedCrdtMessage,
      },
      { no: 2, name: "merkleTree", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
    ]);
  }
}
/**
 * @generated MessageType for protobuf message SyncResponse
 */
export const SyncResponse = new SyncResponse$Type();
