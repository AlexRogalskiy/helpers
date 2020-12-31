export const KIND_TO_USER_MAPPING : Record<string, string> = {
    'ns': 'Namespace',
    'app': 'Application',
    'cont': 'Container',
    'initcont': 'Init Container',
    'sidecont': 'Sidecar Container',
    'vol': 'Volume',
    'configMap': 'Config Map',
    'replicaSet': 'Replica Set',
    'hpa': 'Horizontal Pod AutoScaler',
    'svcaccnt': 'Service Account',
    'rlbndg': 'Role Binding',
    'crlbndg': 'Cluster Role Binding',
    'rl': 'Role',
    'crl': 'Cluster Role',
    'pv': 'Persistent Volume',
    'pvc': 'Persistent Volume Claim',
    'psp': 'Pod Security Policy',
    'netpols': 'Network Policies',
    'netpol': 'Network Policy',
    'node': 'Node',
    'service': 'Service',
    'pod': 'Pod',
    'ingress': 'Ingress',
    'launcher': 'Launcher',
    'storclass': 'Storage Class',
    'storage': 'Storage',
    'image': 'Image',
}