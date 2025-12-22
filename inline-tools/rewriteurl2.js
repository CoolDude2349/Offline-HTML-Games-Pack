function rewriteURL(original) {
  
  let trimmed = original.split('?')[0];
  let trimmed2 = original.split("/").pop();

 
  const match = trimmed.match(/(_|particles)\/.*/);
  if (match) trimmed = match[0];

  return blobUrlss[trimmed] || blobUrlss[trimmed2] || original;
}
