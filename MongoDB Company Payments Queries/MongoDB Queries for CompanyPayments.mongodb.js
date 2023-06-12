// use('CompanyPayments')

// //1. Get all the active accounts from all active companies
// // db.Payments.aggregate([
// //     {
// //       $match:{
// //         active:true
// //       }},
// //     {
// //       $unwind:"$accounts"
// //     },
// //     {
// //       $match:
// //       {
// //         "accounts.active":true
// //       }}])

// //2. From all the active accounts, get all the accounts where accountName exists (is not empty or null)
// // db.Payments.aggregate([
// //     {$match: {
// //         active: true,
// //         "accounts.accountName": { $exists: true, $ne: null, $ne: "" }
// //       }},
// //     {
// //       $unwind: "$accounts"
// //     },
// //     {
// //       $match: {
// //         "accounts.active": true,
// //         "accounts.accountName": { $exists: true, $ne: null, $ne: "" }
// //       }}]);
  
// //3. From all the active accounts,  sort the accounts in the order of their creation
// // 
// // db.Payments.aggregate([
// //   {
// //     $match: {
// //       active: true,
// //       "accounts.accountName": { $exists: true, $ne: null, $ne: "" }
// //     }
// //   },
// //   {
// //     $unwind: "$accounts"
// //   },
// //   {
// //     $match: {
// //       "accounts.active": true,
// //       "accounts.accountName": { $exists: true, $ne: null, $ne: "" }
// //     }
// //   },
// //   {
// //     $sort: {
// //       "accounts.createdOn": 1 //date not in proper format
// //     }
// //   }
// // ])


// //4. Each account has a field 'externalCreatedBy' which contains the id of the user that created the account. Group the account based on their externalCreatedBy field i.e. all the accounts created by user should be grouped together in an array
// // db.Payments.aggregate([
// //   {$match: {
// //       active: true,
// //       "accounts.accountName": { $exists: true, $ne: null, $ne: "" }
// //     }},
// //   {
// //     $unwind: "$accounts"
// //   },
// //   {
// //     $match: {
// //       "accounts.active": true,
// //       "accounts.accountName": { $exists: true, $ne: null, $ne: "" }
// //     }},
// //   {
// //     $group: {
// //       _id: "$accounts.externalCreatedBy",
// //       accounts: { $push: "$accounts" }
// //     }}])


// //5. For all the accounts where batchType is not 'MIG', find the count of inactive accounts
// db.Payments.aggregate([
//   {
//     $match: {
//       active: true,
//       "accounts.accountName": { $exists: true, $ne: null, $ne: "" },
//       "accounts.batchType": { $ne: "MIG" }
//     }},
//   {
//     $unwind: "$accounts"
//   },
//   {
//     $match: {
//       "accounts.active": false,
//       "accounts.accountName": { $exists: true, $ne: null, $ne: "" },
//       "accounts.batchType": { $ne: "MIG" }
//     }
//   },
//   {
//     $group: {
//       _id: null,
//       count: { $sum: 1 }
//     }
//   }
// ])
